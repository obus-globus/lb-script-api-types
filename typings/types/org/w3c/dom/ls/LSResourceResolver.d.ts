import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LSInput } from '../../../../org/w3c/dom/ls/LSInput.d.ts'
export interface LSResourceResolver extends Object{
    resolveResource(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string): LSInput;
}