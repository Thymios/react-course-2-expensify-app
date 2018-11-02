import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={1415} />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should render correctly ExpensesSummary with multiple expenses', () => {
    const wrapper =  shallow(<ExpensesSummary expenseCount={3} expensesTotal={141567} />);
    expect(wrapper).toMatchSnapshot();
});

