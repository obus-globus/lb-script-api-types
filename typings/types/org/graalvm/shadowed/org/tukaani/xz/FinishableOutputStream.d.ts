import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
export abstract class FinishableOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    finish(): void;
}