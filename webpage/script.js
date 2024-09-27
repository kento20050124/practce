// スムーススクロール
const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// コンタクトフォーム送信処理（例）
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // フォームデータを取得
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // サーバーに送信する処理（例）
  fetch('/send_contact.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `name=${name}&email=${email}&message=${message}`
  })
  .then(response => {
    // 送信成功時の処理
    console.log('送信成功');
    // 例：送信完了メッセージを表示
    alert('お問い合わせありがとうございました。');
  })
  .catch(error => {
    // 送信失敗時の処理
    console.error('送信失敗', error);
    // 例：エラーメッセージを表示
    alert('送信に失敗しました。');
  });
});

