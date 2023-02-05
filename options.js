// Saves options to chrome.storage
function save_options() {
  var opensNewTab = document.getElementById('opensNewTab').checked;
  chrome.storage.sync.set({
    opensNewTab: opensNewTab
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    opensNewTab: true
  }, function(items) {
    document.getElementById('opensNewTab').checked = items.opensNewTab;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);