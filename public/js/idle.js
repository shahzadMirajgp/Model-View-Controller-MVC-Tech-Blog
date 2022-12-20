// todo: check idle js

// Once the server start we will monitor for 
function idleLogout() {
  var timer;
  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer;      
  window.ontouchstart = resetTimer;  
  window.onclick = resetTimer;  
  window.onkeydown = resetTimer;   
  window.addEventListener('scroll', resetTimer, true); // 

  async function logout() {
    alert("You have been idle for 5 minutes, logging you out.")
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      //console.log("response of function log out good")
      alert("Logging you out")
      document.location.replace('/');
    } 
    else {
      alert("You are already logged out")
    }
  }

  function resetTimer() {
    clearTimeout(timer);
    timer = setTimeout(logout, 300000);  // will automatically log you out in 5 minutes.
  }
}
idleLogout();
