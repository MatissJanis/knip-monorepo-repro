import { MyComponentConnected } from './MyComponent';
import { connect } from 'react-redux';

export interface StateProps {
	name: string;
}

interface DispatchProps {
	// Add dispatch props here if needed
}

const mapStateToProps = (state: any): StateProps => ({
	name: state.name || 'Hello',
});

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
	// Add dispatch mappings here if needed
});

const connector = connect(
	mapStateToProps,
	mapDispatchToProps
)

export const MyComponent = connector(MyComponentConnected);