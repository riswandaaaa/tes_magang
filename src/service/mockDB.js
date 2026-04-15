// src/services/mockDB.js

let stories = [
  {
    id: 1,
    title: "The Moon that Can’t be Seen",
    writerName: "Rara",
    synopsis: "A mysterious tale about the moon...",
    category: "Teen Fiction",
    tags: ["school", "fiction"],
    coverImage: "",
    status: "Draft",
    lastUpdated: "2024-01-18",
    chapters: []
  },
  {
    id: 2,
    title: "Given",
    writerName: "Sansa S.",
    synopsis: "Romance novel...",
    category: "Romance",
    tags: ["music"],
    coverImage: "",
    status: "Draft",
    lastUpdated: "2024-01-18",
    chapters: []
  }
];

export const getStories = () => [...stories];

export const getStoryById = (id) => stories.find(s => s.id === parseInt(id));

export const addStory = (storyData) => {
  const newStory = {
    ...storyData,
    id: Date.now(),
    lastUpdated: new Date().toISOString().split('T')[0],
    chapters: []
  };
  stories.push(newStory);
  return newStory;
};

export const updateStory = (id, updates) => {
  const index = stories.findIndex(s => s.id === parseInt(id));
  if (index !== -1) {
    stories[index] = { ...stories[index], ...updates, lastUpdated: new Date().toISOString().split('T')[0] };
    return stories[index];
  }
  throw new Error("Story not found");
};

export const deleteStory = (id) => {
  const index = stories.findIndex(s => s.id === parseInt(id));
  if (index !== -1) {
    return stories.splice(index, 1)[0];
  }
  throw new Error("Story not found");
};

// CHAPTERS
export const addChapter = (chapterData) => {
  const story = stories.find(s => s.id === parseInt(chapterData.storyId));
  if (!story) throw new Error("Story not found");

  const newChapter = {
    ...chapterData,
    id: Date.now(),
    createdAt: new Date().toISOString()
  };
  story.chapters.push(newChapter);
  return newChapter;
};

export const getChaptersByStoryId = (storyId) => {
  const story = stories.find(s => s.id === parseInt(storyId));
  return story ? story.chapters : [];
};