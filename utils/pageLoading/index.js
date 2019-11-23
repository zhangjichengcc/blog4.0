import './index.less';

const globalLoading = (key = false) => {
  if (key) {
    const child = document.createElement('dev');
    child.setAttribute('id', 'pageLoading_global');
    child.innerHTML = '<div class="line-content"><i></i><i></i><i></i><i></i><i></i></div><p>welcome</p>';
    document.body.appendChild(child);
  } else {
    const child = document.getElementById('pageLoading_global');
    if(child) document.body.removeChild(child);
  }
}

export default {
  globalLoading,
}