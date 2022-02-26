const ITEM_TYPES = {
  image: drawImage,
  audio: drawAudio,
  video: drawVideo
}

function drawImage(item) {
  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery-item_image');
  imgEl.src = item.resource;
  return imgEl;
}

function drawAudio(item) {
  const audioEl = document.createElement('audio');
  audioEl.classList.add('gallery-item_audio');
  audioEl.src = item.resource;
  audioEl.controls = true;

  return audioEl;
}

function drawVideo(item) {
  const videoEl = document.createElement('video');
  videoEl.classList.add('gallery-item_video');
  videoEl.src = item.resource;
  videoEl.controls = true;

  return videoEl;
}

export function drawGallery(item) {
  const itemEl = document.createElement('div');
  itemEl.classList.add('gallery-item');

  const resourceWrapEl = document.createElement('div');
  resourceWrapEl.classList.add("gallery-item_resource");

  const drawerForType = ITEM_TYPES[item.type];
  resourceWrapEl.appendChild(drawerForType(item));

  const titleEl = document.createElement('span');
  titleEl.classList.add('gallery-item_title');
  titleEl.textContent = item.title;

  itemEl.appendChild(resourceWrapEl);
  itemEl.appendChild(titleEl);

  return itemEl;
}
