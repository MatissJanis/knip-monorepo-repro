import React from 'react';
import { StateProps } from './test-seven';

interface MyProps extends StateProps {
    test: true;
}

export const MyComponentConnected = ({ test }: MyProps) => {
	return (
		<div>
			{test}
		</div>
	);
};