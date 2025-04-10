"use client"

import type React from "react"

import { useState } from "react"
import { Star, MessageSquare, ThumbsUp, Flag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import type { Review } from "@/lib/types"

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: "1",
    productId: "1",
    userId: "user1",
    userName: "Rahul Sharma",
    rating: 5,
    comment:
      "Amazing card! The holographic effect is stunning and the signature looks authentic. Very happy with my purchase.",
    date: "2023-12-15T10:30:00Z",
  },
  {
    id: "2",
    productId: "1",
    userId: "user2",
    userName: "Priya Patel",
    rating: 4,
    comment: "Great addition to my collection. The card quality is excellent, though the packaging could be better.",
    date: "2023-11-28T14:45:00Z",
  },
  {
    id: "3",
    productId: "1",
    userId: "user3",
    userName: "Amit Singh",
    rating: 5,
    comment: "One of the best cards in my collection. The details are incredible and it arrived in perfect condition.",
    date: "2023-10-10T09:15:00Z",
  },
  {
    id: "4",
    productId: "2",
    userId: "user4",
    userName: "Sneha Gupta",
    rating: 5,
    comment: "This Dhoni card is a must-have for any CSK fan. The quality is top-notch!",
    date: "2023-12-05T16:20:00Z",
  },
]

export default function ProductReviews({ productId }: { productId: string }) {
  const { toast } = useToast()
  const [reviews, setReviews] = (useState<Review[]>(
    mockReviews.filter(review => review.productId === productId)
  ) = useState<Review[]>(mockReviews.filter((review) => review.productId === productId)))
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleRatingChange = (rating: number) => {
    setNewReview((prev) => ({ ...prev, rating }))
  }

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview((prev) => ({ ...prev, comment: e.target.value }))
  }

  const handleSubmitReview = () => {
    if (!newReview.comment.trim()) {
      toast({
        title: "Error",
        description: "Please write a review comment",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newReviewObj: Review = {
        id: `new-${Date.now()}`,
        productId,
        userId: "current-user",
        userName: "You",
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString(),
      }

      setReviews((prev) => [newReviewObj, ...prev])
      setNewReview({ rating: 5, comment: "" })
      setIsSubmitting(false)

      toast({
        title: "Review submitted",
        description: "Thank you for your feedback!",
      })
    }, 1000)
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <MessageSquare className="mr-2 h-5 w-5" /> Customer Reviews
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="font-semibold mb-4">Write a Review</h3>

            <div className="mb-4">
              <p className="text-sm mb-2">Rating</p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingChange(star)}
                    className="text-gray-300 hover:text-yellow-500 focus:outline-none"
                  >
                    <Star className={`h-6 w-6 ${star <= newReview.rating ? "fill-yellow-500 text-yellow-500" : ""}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <Textarea
                placeholder="Share your experience with this product..."
                value={newReview.comment}
                onChange={handleCommentChange}
                rows={5}
              />
            </div>

            <Button onClick={handleSubmitReview} disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-2">
          {reviews.length === 0 ? (
            <div className="text-center py-8 border rounded-lg">
              <MessageSquare className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <h3 className="text-lg font-medium mb-1">No reviews yet</h3>
              <p className="text-muted-foreground">Be the first to review this product</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center mb-1">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-medium">{review.userName}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {new Date(review.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-sm mb-3">{review.comment}</p>

                  <div className="flex items-center text-xs text-muted-foreground">
                    <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                      <ThumbsUp className="h-3 w-3" /> Helpful (0)
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
