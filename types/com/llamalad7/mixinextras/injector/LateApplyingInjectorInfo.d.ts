import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LateApplyingInjectorInfo extends Object{
    getLateInjectionType(): string;
    lateApply(): void;
    lateInject(): void;
    latePostInject(): void;
    wrap(arg0: LateApplyingInjectorInfo): void;
}