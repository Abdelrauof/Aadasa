# 📷 منصة عَدَسَة (Adasa) – مدونة فن التصوير الفوتوغرافي

مشروع مدونة متخصصة في فن وتقنيات التصوير الفوتوغرافي، تم بناؤه باستخدام **Angular 20** مع تصميم عصري وسريع متوافق مع كافة الشاشات.

---

## 🌟 مميزات المشروع (Features)

1. **الصفحة الرئيسية (Home Page)**:
   - واجهة بصرية بتدرجات وتأثيرات تناسب طابع التصوير والضوء.
   - قسم المقالات المميزة (Featured Articles).
   - استعراض أقسام وتصنيفات المدونة مع أيقونات تفاعلية.
   - أحدث المقالات وإحصائيات المنصة.

2. **صفحة المقالات (Blog Feed)**:
   - **البحث الفوري (Instant Search)**: إمكانية البحث عن أي مقال بالعنوان، النبذة، أو الوسوم الدلالية.
   - **الفلترة بالأقسام (Category Filtering)**: أزرار مخصصة (Custom Chips/Pills) للفلترة السريعة بدون استخدام Navs/Tabs التقليدية، مع دعم المزامنة مع روابط الـ URL (Query Params).
   - **التبديل بين أنماط العرض (Grid / List Views)**: إمكانية تصفح المقالات إما بنمط الشبكة أو بنمط القائمة التفصيلية.
   - **الترقيم والتصفح (Pagination - Bonus ⭐)**: تقسيم المقالات إلى صفحات (6 مقالات في كل صفحة) مع أزرار التنقل الذكية.
   - **حالة عدم وجود نتائج (Empty State)**: واجهة لطيفة وزر لإعادة تعيين الفلاتر عند عدم مطابقة البحث.

3. **صفحة تفاصيل المقال (Post Details Page)**:
   - عرض غلاف عريض للمقال مع بيانات الكاتب والتاريخ ووقت القراءة.
   - تقسيم محتوى المقال بدقة وعرض فهرس المحتويات (Table of Contents) للتنقل السريع داخل المقال.
   - ميزة نسخ رابط المقال للمشاركة.
   - عرض مقالات مقترحة وذات صلة من نفس التصنيف.

4. **صفحة الخطأ (404 Page)**:
   - صفحة مخصصة عند زيارة أي مسار غير موجود مع روابط سريعة للعودة.

5. **صفحات إضافية (Bonus Pages)**:
   - من نحن (About).
   - سياسة الخصوصية (Privacy Policy).
   - شروط الاستخدام (Terms of Service).

---

## 🏗️ البنية المعمارية (Architecture & Best Practices)

- **Angular Standalone Components**: استخدام مكونات مستقلة بالكامل.
- **Angular Router**:
  - تحميل كسول للمكونات (Lazy Loading عبر `loadComponent`).
  - دعم الـ Dynamic Routes (`blog/:slug`).
  - دعم الـ Query Params للمزامنة مع التصنيفات (`?category=...`).
  - تفعيل `withInMemoryScrolling` للعودة لأعلى الصفحة والتنقل السلس.
- **Service Layer (`BlogService`)**: فصل جلب ومعالجة البيانات في Service مركزي بدلاً من الاستيراد العشوائي داخل الكومبوننت.
- **Custom Pipe (`ArabicDatePipe`)**: تنسيق التواريخ باللغة العربية بطريقة معيارية.
- **TypeScript Strong Typing (`models/blog.model.ts`)**: تعريف interfaces واضحة لكل من `BlogPost`, `BlogCategory`, `BlogAuthor`.

---

## 🚀 تشغيل المشروع محلياً (How to Run)

```bash
# تثبيت الحزم
npm install

# تشغيل خادم التطوير
npm start
# أو
npm run start
```

افتح المتصفح على: `http://localhost:4200/`

---

## 🛠️ التقنيات المستخدمة (Tech Stack)

- **Framework**: Angular 20
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Data**: Static JSON Response Simulation
"# Aadasa" 
