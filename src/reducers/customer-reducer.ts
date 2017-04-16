export const CUSTOMER_ADD = "CUSTOMER_ADD";
export const CUSTOMER_DELETE = "CUSTOMER_DELETE";
export const CUSTOMER_EDIT = "CUSTOMER_EDIT";


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
        case CUSTOMER_EDIT:
            return state.map(c => {
                if (c.Id === payload.Id) {
                    return payload;
                } else {
                    return c;
                }
            })
        case CUSTOMER_DELETE:
            return state.filter(c => c.Id !== payload.Id);
        default:
            return state;
    }
}