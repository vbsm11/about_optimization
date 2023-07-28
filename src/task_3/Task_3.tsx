import {ChangeEvent, FC, useState} from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';
import {Input} from './Input/Input';


//find the problem and fix it as part of composition optimization, memo, children

export const Task_3 = () => {

  return (
    <FixWithChildren>
      <div>Lags when change value</div>
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
            <input type="text" value={value} onChange={onChange} />
            {children}
        </div>
    )
}
