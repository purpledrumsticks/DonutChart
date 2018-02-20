import React from 'react';
import {PieChart, Pie, Cell, Label} from 'recharts';

const App = () => {
    const colors = ['#FF69B4', '#69B4FF'];
    return (
        <div>
            <PieChart width={1200} height={650}>
                <Pie
                     data={[{name: 'a', value: 12}, {name: 'b', value: 15}]}
                     label
                     dataKey="value"
                     nameKey="name"
                     cx="50%"
                     cy="50%"
                     innerRadius={100}
                     outerRadius={150}
                >
                    <Label value="blah blah blah" position="center" />
                    {
                        [{name: 'a', value: 12}, {name: 'b', value: 15}].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                    }
                </Pie>
            </PieChart>
        </div>
        );
}

export default App;
