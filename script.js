const content = document.getElementById("content");

/**
 * لكل صفحة: العنوان + رابط مجلد Google Drive بنفس اسم الصفحة.
 * ✅ غيّري REPLACE_WITH_FOLDER_ID_* إلى معرف المجلد الحقيقي في حسابك.
 * مثال رابط مجلد درايف: https://drive.google.com/drive/folders/XXXXXXXXXXXX
 */
const pages = {
  page1: { title: "01 أداء الواجبات الوظيفية", drive: "https://drive.google.com/drive/u/1/folders/1oXbqcwMvjj81V1YfleDBhZcSMk4OYeLy" },
  page2: { title: "02 / التفاعل مع المجتمع المهني", drive: "https://drive.google.com/drive/u/1/folders/1PtDNvRRjQ0UPJ4nWYvtehbzG-0Fo4Mym" },
  page3: { title: "03 / التفاعل مع أولياء الأمور", drive: "https://drive.google.com/drive/u/1/folders/1kRe1JGYdUY5U-a37666wWxXFNSc9ohWr" },
  page4: { title: "04 / التنوع في استراتيجيات التدريس", drive: "https://drive.google.com/drive/u/1/folders/1U_xJv3vshMtNdjvM9VeWtHY-Z_a1JQh4" },
  page5: { title: "05 / تحسين نتائج المتعلمين", drive: "https://drive.google.com/drive/u/1/folders/1O7TjFPc46p-x8SldGtXjYRhLfIaU1M-w" },
  page6: { title: "06/ إعداد وتنفيذ خطة التعلم", drive: "https://drive.google.com/drive/u/1/folders/1QpFZ3MHut6jdgqPTk5Nidc1VADukyh9w" },
  page7: { title: "07 / توظيف تقنيات ووسائل التعلم المناسبة", drive: "https://drive.google.com/drive/u/1/folders/1XZUEOj4z3mCGwoeq0YP_1yZEDMNzKoLc" },
  page8: { title: "08 / تهيئة بيئة تعليمية", drive: "https://drive.google.com/drive/u/1/folders/1MrD02m3xATv7lQSEs8xYEQvC_egan5qj" },
  page9: { title: "09 / الإدارة الصفية", drive: "https://drive.google.com/drive/u/1/folders/1kIXvPb0hthB6CwrLJOSx9XHe_dFjyBbD" },
  page10: { title: "10/ تحليل نتائج المتعلمين وتشخيص مستوياتهم", drive: "https://drive.google.com/drive/u/1/folders/16UgGlcssWECwsNUlaiu6eLSO8jKFQ9Ls" },
  page11: { title: "/11 / تنوع أساليب التقويم", drive: "https://drive.google.com/drive/u/1/folders/1MrCfJkW3cIlxcH-oWDJ9SQDBe1iMaT1v" }
};

function renderPage(id) {
  const page = pages[id];
  if (!page) return;

  content.innerHTML = `
    <section class="page">
      <h2>${page.title}</h2>
      <p>🔹 ارفعي الأدلة والوسائط (صور/فيديو/ملفات) داخل مجلد Google Drive المرتبط بهذه الصفحة.</p>

      <div class="upload-box">
        <div class="upload-row">
          <label class="file-label">
            <i class="fa-solid fa-cloud-arrow-up"></i>
            اختيار ملفات (محلي)
            <input type="file" multiple class="hidden-input" />
          </label>
          <a class="upload-link" href="${page.drive}" target="_blank" rel="noopener">
            فتح مجلد Google Drive
          </a>
        </div>
        <p class="hint">💡 ملاحظة: الرفع الحقيقي يتم داخل مجلد Google Drive بعد فتحه. حقل الملفات هنا للاحتفاظ بقائمة بما اخترتِ قبل الرفع.</p>
        <ul class="file-list" id="list-${id}"></ul>
      </div>
    </section>
  `;

  // استعراض أسماء الملفات المختارة (عرض فقط)
  const input = document.querySelector(".hidden-input");
  const list = document.getElementById(\`list-\${id}\`);
  if (input && list) {
    input.addEventListener("change", () => {
      list.innerHTML = "";
      [...input.files].forEach(f => {
        const li = document.createElement("li");
        li.textContent = `• ${f.name}`;
        list.appendChild(li);
      });
    });
  }
}

// تفعيل الروابط في القائمة الجانبية
document.querySelectorAll(".sidebar ul li a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const pageId = link.getAttribute("href").substring(1);
    renderPage(pageId);
  });
});
