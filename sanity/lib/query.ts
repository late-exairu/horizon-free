import { groq } from "next-sanity";
import client from "./client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`,
  );
}

export async function getSideNav() {
  return client.fetch(
    groq`*[_type == "navigation" && navId.current == "sidebar-menu"]{
      _id,
      title,
      navId,
      items [] {
        "_id": navigationItemUrl.internalLink->_id,
        "title": navigationItemUrl.internalLink->title,
        "url": navigationItemUrl.internalLink->url
      }
    }`,
  );
}

export async function getPage() {
  return client.fetch(
    groq`*[_type == "page"]{
      _id,
      title,
      fullTitle
    }`,
  );
}
