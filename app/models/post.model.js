module.exports = (mongoose) => {
    const postSchema = mongoose.Schema(
        {
            title: String,
            body: String,
            published: Boolean
        },
        { timestamp: true }
    )

    postSchema.method("toJSON", () => {
        const { __v, _id, ...object } = this.toObject()
        object.id = _id
        return object
    })

    const Post = mongoose.model("posts", postSchema)
    return Post
}