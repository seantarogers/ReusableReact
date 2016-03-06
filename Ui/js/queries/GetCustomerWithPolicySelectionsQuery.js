import CustomerStore from '../stores/CustomerStore';
import PolicySelectedStore from '../stores/PolicySelectedStore';
import R from 'ramda';

const GetCustomerWithPolicySelectionsQuery = {
    execute: () => {

        const customer = CustomerStore.get();
        if (customer === null || customer === undefined) {
            return null;
        }

        const policySelectedIds = PolicySelectedStore.get();

        if (policySelectedIds.length === 1) {
            console.log(policySelectedIds[0]);
        };

        var policiesWithSelections = customer.policies.map((policy) => {

            if (R.contains(policy.id, policySelectedIds)) {
                return R.merge(policy, { selected: true });
            }
            return R.merge(policy, { selected: false });
        });

        return R.merge(customer, {policies: policiesWithSelections});
    }
};

export default GetCustomerWithPolicySelectionsQuery;