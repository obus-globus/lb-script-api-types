import type { Object } from '../../../java/lang/Object.d.ts'
export class Page extends Object {
    constructor()
    body: number;
    body_base: number[];
    body_len: number;
    header: number;
    header_base: number[];
    header_len: number;
    bos(): number;
    checksum(): void;
    continued(): number;
    copy(): Page;
    copy(arg0: Page): Page;
    eos(): number;
    granulepos(): number;
    pageno(): number;
    serialno(): number;
    version(): number;
}