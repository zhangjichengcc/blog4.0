// import './index.less';
// const pageStyle = window.localStorage.getItem('pageStyle') || 'light';
const pageStyle = 'light';

const globalLoading = (key = false) => {
  if (key) {
    const child = document.createElement('dev');
    child.setAttribute('id', 'pageLoading_global');
    child.innerHTML = '<div class="line-content"><i></i><i></i><i></i><i></i><i></i></div><p>WELCOME</p>';
    document.body.appendChild(child);
  } else {
    const child = document.getElementById('pageLoading_global');
    if(child) document.body.removeChild(child);
  }
}

const pageLoading = (key = false, text) => {
  if (key) {
    const child = document.createElement('dev');
    child.setAttribute('id', 'pageLoading_page');
    if (pageStyle === 'black') child.setAttribute('class', 'black');
    child.innerHTML = `<div class="ball-content"><i></i><i></i><i></i></div><p>${text || 'loading'}<span>.</span><span>.</span><span>.</span></p>`;
    document.body.appendChild(child);
  } else {
    const child = document.getElementById('pageLoading_page');
    if(child) document.body.removeChild(child);
  }
}

export default {
  globalLoading,
  pageLoading,
}