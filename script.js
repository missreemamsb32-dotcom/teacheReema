const content = document.getElementById("content");

/**
 * لكل صفحة: العنوان + رابط مجلد Google Drive بنفس اسم الصفحة.
 * ✅ غيّري REPLACE_WITH_FOLDER_ID_* إلى معرف المجلد الحقيقي في حسابك.
 * مثال رابط مجلد درايف: https://drive.google.com/drive/folders/XXXXXXXXXXXX
 */
const pages = {
  page1: { title: "01 أداء الواجبات الوظيفية", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_01" },
  page2: { title: "02 / التفاعل مع المجتمع المهني", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_02" },
  page3: { title: "03 / التفاعل مع أولياء الأمور", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_03" },
  page4: { title: "04 / التنوع في استراتيجيات التدريس", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_04" },
  page5: { title: "05 / تحسين نتائج المتعلمين", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_05" },
  page6: { title: "06/ إعداد وتنفيذ خطة التعلم", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_06" },
  page7: { title: "07 / توظيف تقنيات ووسائل التعلم المناسبة", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_07" },
  page8: { title: "08 / تهيئة بيئة تعليمية", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_08" },
  page9: { title: "09 / الإدارة الصفية", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_09" },
  page10: { title: "10/ تحليل نتائج المتعلمين وتشخيص مستوياتهم", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_10" },
  page11: { title: "/11 / تنوع أساليب التقويم", drive: "https://drive.google.com/drive/folders/REPLACE_WITH_FOLDER_ID_11" }
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
