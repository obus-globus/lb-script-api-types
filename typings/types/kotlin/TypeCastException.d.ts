import type { Serializable } from '../java/io/Serializable.d.ts'
import type { ClassCastException } from '../java/lang/ClassCastException.d.ts'
export class TypeCastException extends ClassCastException implements Serializable {
    constructor()
    constructor(message: string | null)
}