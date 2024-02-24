interface CategoryItemProps {
    color: string;
    value: number;
    heading: string;
}
const CategoryItem = ({ color, value, heading }: CategoryItemProps) => {
    return (
        <div className="category-item">
            <h5>{heading}</h5>
            <div>
                <div
                    style={{ backgroundColor: color, width: `${value}%` }}
                ></div>
            </div>
            <span>{value}%</span>
        </div>
    )
}

export default CategoryItem
