import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Rating } from "primereact/rating";

const Categories = ({ categories, onCategorySelect }) => {
    const [checked, setChecked] = useState(true);
    const [value, setValue] = useState(null);
    return (
        <div className="card flex justify-content-center">
            <Rating value={value} onChange={(e) => setValue(e.value)} />
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
};

export default Categories;
