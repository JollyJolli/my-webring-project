function showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <span class="modal-close" onclick="closeModal()">×</span>
      <div>${content}</div>
    `;
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    overlay.style.display = 'block';
    modal.style.display = 'block';
  }

  function closeModal() {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    if (modal) modal.remove();
    if (overlay) overlay.remove();
  }

  function handleBucketClick() {
    showModal('🪣 You have encountered a bucket. Your day is now 37% more bucket-like.');
  }

  function handleGeorgeClick() {
    showModal('👻 GEORGE has been experienced. There is no going back.');
  }

  function handleSaveClick() {
    showModal('💾 Saving to floppy disk...<br><br>ERROR: Not enough space on A:\\<br>Please insert another disk.');
  }

  function handleEmailClick() {
    showModal('📧 Opening mail client...<br><br>ERROR: Your computer is not properly configured to send mail with Outlook Express.');
  }

  function handleWebringClick(direction) {
    const messages = {
      prev: "↶ Loading previous site... Please insert your AOL CD-ROM",
      next: "↷ Loading next site... Please increase your baud rate",
      ring: "⚪ Welcome to the Webring! Current position: 42/∞"
    };
    showModal(messages[direction]);
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pixel-button').forEach(button => {
      const text = button.textContent.toLowerCase();
      if (text.includes('bucket')) {
        button.onclick = handleBucketClick;
      } else if (text.includes('george')) {
        button.onclick = handleGeorgeClick;
      } else if (text.includes('floppy')) {
        button.onclick = handleSaveClick;
      } else if (text.includes('mail')) {
        button.onclick = handleEmailClick;
      } else if (text.includes('previous')) {
        button.onclick = () => handleWebringClick('prev');
      } else if (text.includes('next')) {
        button.onclick = () => handleWebringClick('next');
      } else if (text.includes('web ring')) {
        button.onclick = () => handleWebringClick('ring');
      }
    });
  });