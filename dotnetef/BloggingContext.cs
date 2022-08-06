using Microsoft.EntityFrameworkCore;

namespace dotnetef;
public class BloggingContext:DbContext
{
    public DbSet<Blog> Blogs {get;set;}
    public DbSet<Post> Posts {get;set;}
    public string DbPath {get;}

    public BloggingContext()
    {
        var folder=Environment.SpecialFolder.LocalApplicationData;
        Console.WriteLine("folder:" + folder);
        var path=Environment.GetFolderPath(folder);
         Console.WriteLine("path:" + path);
        DbPath=System.IO.Path.Join(path, "BloggingDb");

        Console.WriteLine("db path:" + DbPath);

    }

    protected override void OnConfiguring(DbContextOptionsBuilder options)=>
    options.UseSqlServer($"Integrated Security=SSPI;Persist Security Info=False;Initial Catalog=BloggingDb;Data Source=.\\sqlexpress");

}

public class Blog{
public int BlogId { get; set; }
    public string Url { get; set; }

    public List<Post> Posts { get; } = new();
}

public class Post{
 public int PostId { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }

    public int BlogId { get; set; }
    public Blog Blog { get; set; }
}
