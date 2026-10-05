# Form 1 Classroom Portal — Mobile Web Version

This folder is a standalone, responsive HTML site based on the uploaded `parent portal.pptx`.

## Why this version fixes the mobile problem

- Internal navigation is handled by JavaScript in one page.
- Internal buttons do **not** open new tabs.
- There is no Google Slides viewer and no portal login.
- The site can be hosted as a public GitHub Pages site.
- External Google Drive/Google Forms links open in the **same tab**. Those services can still request Google sign-in if their own sharing permissions require it.

## Recommended hosting: GitHub Pages

1. Create a GitHub repository, for example `parent-portal`.
2. Upload **everything inside this folder** to the repository root.
3. In GitHub: **Settings → Pages**.
4. Choose **Deploy from a branch**, select the main branch and `/ (root)`.
5. Save. GitHub will provide the public website address.

## Important: Google Drive files

The original PowerPoint contains Google Drive links for the term timetables and the gallery. A website cannot bypass a Google Drive permission setting.

For each Drive file/folder:
**Share → General access → Anyone with the link → Viewer**

If the files are already public, parents should be able to access them without signing in.

## What is intentionally left as-is

The supplied PowerPoint contains teacher details only for Form 1-3 and does not provide the individual exam timetable links or detailed Subjects/Resource Centre content. Those sections are therefore not invented here and are marked as ready for additional content.
