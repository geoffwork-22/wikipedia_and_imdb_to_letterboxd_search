const contextMenuId = 'change-to-letterboxd';

chrome.contextMenus.create({
  id: contextMenuId,
  title: 'Change to Letterboxd',
  contexts: ['page', 'selection', 'link']
});

function getOpensNewTabSetting() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get({ opensNewTab: true }, items => {
      resolve(items.opensNewTab);
    });
  });
}

async function changeToLetterboxd(tab) {
  let movieName = tab.title.replace(/ /g, '-').toLowerCase();
  if (tab.url.indexOf('imdb.com') !== -1) {
    movieName = movieName.replace(/[^\w-]+/g, '');
	//console.log(movieName)
    movieName = movieName.replace(/imdb$/i, '');
    //console.log(movieName)
	movieName = movieName.replace(/---$/, '');
	//console.log(movieName)
	movieName = movieName.replace(/[0-9]+$/, '');
	//console.log(movieName)
	movieName = movieName.replace(/-$/, '');
	//console.log(movieName)
	movieName = movieName.replace(/-tv-movie$/, '')
  } else {
    movieName = movieName.replace(/[^\w-]+/g, '');
	//console.log(movieName)
    movieName = movieName.replace(/-wikipedia$/i, '');
	//console.log(movieName)
    movieName = movieName.replace(/--$/, '');
	//console.log(movieName)
	movieName = movieName.replace(/-film$/, '')
	//console.log(movieName)
	movieName = movieName.replace(/_film\)$/, '')
	//console.log(movieName)
	movieName = movieName.replace(/[0-9]+$/, '');
	//console.log(movieName)
	movieName = movieName.replace(/\(_$/, '');
	//console.log(movieName)
	movieName = movieName.replace(/-$/, '')
	console.log(movieName)
  }
  const url = `https://letterboxd.com/search/${movieName}/`;

  const opensNewTab = await getOpensNewTabSetting();
  if (opensNewTab) {
    chrome.tabs.create({ url });
  } else {
    chrome.tabs.update(tab.id, { url, active: true });
  }
}



chrome.browserAction.onClicked.addListener(function (tab) {
  changeToLetterboxd(tab);
});


chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === contextMenuId) {
    const task = {
      name: info.selectionText || tab.title,
    };
    changeToLetterboxd(task);
    chrome.tabs.remove(tab.id);
  }
});
