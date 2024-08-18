import React from 'react';
import { Label } from '../types';

interface LabelFilterProps {
    labels: Label[];
    handleLabelFilter: (labelId: number) => void;
}

const LabelFilter: React.FC<LabelFilterProps> = ({ labels, handleLabelFilter }) => {
    return (
        <div>
            <h3>Filter by Labels</h3>
            {labels.map(label => (
                <label key={label.id}>
                    <input 
                        type="checkbox" 
                        onChange={() => handleLabelFilter(label.id)} 
                    />
                    {label.name}
                </label>
            ))}
        </div>
    );
};

export default LabelFilter;
