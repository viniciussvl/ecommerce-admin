export interface Product {
    _id: String,
    name: String,
    slug: String,
    description: String,
    price: Number,
    status: Boolean,
    imageUrl?: String,
    createdAt: Date,
    updatedAt: Date
}