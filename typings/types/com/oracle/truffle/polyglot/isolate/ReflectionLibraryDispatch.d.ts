import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ReflectionLibraryDispatch extends Object{
    dispatch(objectHandle: number, messageId: number, args: Object[]): Object;
    releaseReference(objectHandle: number): void;
}