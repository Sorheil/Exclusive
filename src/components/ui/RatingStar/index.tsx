const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);

    return (
        <div className="flex">
            {[...Array(totalStars)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-5 h-5 ${index < filledStars ? 'text-yellow-500' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );
};
export default StarRating