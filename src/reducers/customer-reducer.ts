export const CUSTOMER_ADD = "CUSTOMER_ADD";
export const CUSTOMER_DELETE = "CUSTOMER_DELETE";


export function customer_list(state = [{ 'Id': 1, 'Name': 'Rahul', Company: 'Hashedin' }],
    { type, payload
    }) {
    switch (type) {
        case CUSTOMER_ADD:
            if (state.length) {
                let isCustomerExist = state.find(f => f.Id === payload.Id);
                if (!isCustomerExist) {
                    return [...state, payload];
                }
            } else {
                return [...state, payload];
            }
        default:
            return state;
    }
}