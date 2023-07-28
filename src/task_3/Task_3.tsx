import {ChangeEvent, FC, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';
import {Input} from './Input/Input';


//find the problem and fix it as part of composition optimization, memo, children
// еще варианты решения - useEffect, useRef

export const Task_3 = () => {

  return (
    <FixWithChildren>
      <SlowComponent />
    </FixWithChildren>
  );
};

type FixWithChildrenPropsType = {
    children: React.ReactNode
}

const FixWithChildren: FC<FixWithChildrenPropsType> = ({children}) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange} />
            {children}
        </div>
    )
}
