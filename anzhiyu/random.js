var posts=["2024/03/14/【Arcpy】栅格数据的批量镶嵌和上传切片/","2023/11/13/【QT-SQLite】实现大学生课程学习管理与成绩评价系统（2）——数据库实现/","2023/10/13/个人介绍/","2024/03/14/【QT-SQLite】实现大学生课程学习管理与成绩评价系统（3）——代码编写/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };