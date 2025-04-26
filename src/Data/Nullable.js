/* eslint-disable no-eq-null, eqeqeq */

const nullImpl = null;
export { nullImpl as null };
export const nullable = (a, r, f) => a == null ? r : f(a);
