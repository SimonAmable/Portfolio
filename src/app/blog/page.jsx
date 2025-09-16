import Link from 'next/link'
import Image from 'next/image'
import { getAllPosts } from '@/lib/blog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function BlogPage() {
  const posts = getAllPosts()
  const latestPost = posts[0]
  const morePosts = posts.slice(1)

  return (
    <div className="min-h-screen  text-foreground">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog.</h1>
          
          {latestPost && (
            <Link href={`/blog/${latestPost.slug}`} className="block mb-8">
              {latestPost.image && (
                <div className="relative w-full h-64 border border-border rounded-xl overflow-hidden">
                  <Image
                    src={latestPost.image}
                    alt={latestPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <Card className="border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">{latestPost.title}</CardTitle>
                  <CardDescription>{latestPost.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          )}
        </div>

        <div className="mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {morePosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                {post.image && (
                  <div className="relative w-full h-48 border border-border rounded-xl overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <Card className="border-0">
                  <CardHeader>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
