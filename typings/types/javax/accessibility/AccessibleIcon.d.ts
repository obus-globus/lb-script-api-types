import type { Object } from '../../java/lang/Object.d.ts'
export interface AccessibleIcon extends Object{
    getAccessibleIconDescription(): string;
    getAccessibleIconHeight(): number;
    getAccessibleIconWidth(): number;
    setAccessibleIconDescription(arg0: string): void;
}