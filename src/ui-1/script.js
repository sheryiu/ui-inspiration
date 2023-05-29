const navEl = document.getElementById('nav');
const userListEl = document.getElementById('userList');

function navMouseEnter(e) {
  navEl.classList.remove('after:shadow-none');
  navEl.classList.add(...'after:h-10 after:bg-purple-400 after:shadow-[0_0_8px_2px] after:shadow-purple-300'.split(' '));
}
/**
 *
 * @param {MouseEvent} e
 */
function navMouseMove(e) {
  const { top } = navEl.getBoundingClientRect();
  navEl.style.setProperty('--glow-y', `${ Math.max(20, e.clientY - top + 3) }px`);
}

function navMouseLeave(e) {
  navEl.classList.add('after:shadow-none');
  navEl.classList.remove(...'after:h-10 after:bg-purple-400 after:shadow-[0_0_8px_2px] after:shadow-purple-300'.split(' '));
}

function userListMouseEnter(e) {
  userListEl.classList.remove('after:shadow-none');
  userListEl.classList.add(...'after:h-10 after:bg-purple-400 after:shadow-[0_0_8px_2px] after:shadow-purple-300'.split(' '));
}
/**
 *
 * @param {MouseEvent} e
 */
function userListMouseMove(e) {
  const { top } = userListEl.getBoundingClientRect();
  userListEl.style.setProperty('--glow-y', `${ Math.max(20, e.clientY - top + 3) }px`);
}

function userListMouseLeave(e) {
  userListEl.classList.add('after:shadow-none');
  userListEl.classList.remove(...'after:h-10 after:bg-purple-400 after:shadow-[0_0_8px_2px] after:shadow-purple-300'.split(' '));
}