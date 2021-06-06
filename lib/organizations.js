import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const PAGE_SIZE = 10;

const basePath = (process.env.NODE_ENV === "production") ? path.join(process.cwd(), ".next/server/chunks") : process.cwd();

const organizationsDirectory = path.join(basePath, 'content', 'organizations');

export function getSortedOrganizationsData(
  sortBy = 'name',
  page = 1,
  filterByTown = null,
  filterByServices = null,
) {
  // Get file names under /organizations
  const fileNames = fs.readdirSync(organizationsDirectory);
  let organizationsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');
    // Read markdown file as string
    const fullPath = path.join(organizationsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  if (sortBy) {
    // Sort organizations by name or town
    sortBy = sortBy.substring(0, 30);
    organizationsData = organizationsData.sort((a, b) => {
      if (a.hasOwnProperty(sortBy) && b.hasOwnProperty(sortBy)) {
        return a[sortBy].localeCompare(b[sortBy]);
      }
      return 0;
    });
  }
  if (filterByTown) {
    // Filter organizations by town
    filterByTown = filterByTown.substring(0, 30);
    organizationsData = organizationsData.filter(
      (organization) => buildSlug(organization.town) === filterByTown,
    );
  }
  if (filterByServices) {
    // Filter organizations by services
    organizationsData = organizationsData.filter(function (organizationData) {
      if (
        (filterByServices.includes('service1') &&
          organizationData.service1 == true) ||
        (filterByServices.includes('service2') &&
          organizationData.service2 == true) ||
        (filterByServices.includes('service3') &&
          organizationData.service3 == true) ||
        (filterByServices.includes('service4') &&
          organizationData.service4 == true) ||
        (filterByServices.includes('service5') &&
          organizationData.service5 == true)
      ) {
        return true;
      }
      return false;
    });
  }
  let pagesCount = organizationsData.length;
  if (!filterByTown && !filterByServices) {
    pagesCount = Math.ceil(organizationsData.length / PAGE_SIZE);
    if (page) {
      organizationsData = organizationsData.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE,
      );
    }
  }
  return [organizationsData, pagesCount];
}

function buildSlug(value) {
  value = value.toLowerCase();
  value = value.replace(/^\s+|\s+$/g, ''); // trim

  // remove accents, swap ñ for n, etc
  var from = 'čřžšàáäâèéëêěìíïîòóöôùúüûůýňñç·/_,:;';
  var to = 'crzsaaaaeeeeeiiiioooouuuuuyn\nc------';
  for (var i = 0, l = from.length; i < l; i++) {
    value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  value = value
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return value;
}

export function getAllOrganizationIds() {
  const fileNames = fs.readdirSync(organizationsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getOrganizationData(id) {
  const fullPath = path.join(organizationsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
