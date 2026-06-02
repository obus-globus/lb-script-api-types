import type { Serializable } from '../java/io/Serializable.d.ts'
import type { NullPointerException } from '../java/lang/NullPointerException.d.ts'
export class KotlinNullPointerException extends NullPointerException implements Serializable {
    constructor()
    constructor(message: string | null)
}