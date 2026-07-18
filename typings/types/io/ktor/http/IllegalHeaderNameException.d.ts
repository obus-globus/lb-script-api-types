import type { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.d.ts'
export class IllegalHeaderNameException extends IllegalArgumentException {
    constructor(headerName: string, position: number)
    readonly headerName: string;
    readonly position: number;
}