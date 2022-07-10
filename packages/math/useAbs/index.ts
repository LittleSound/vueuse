import type { MaybeComputedRef } from '@vueuse/shared'
import { resolveUnref } from '@vueuse/shared'
import type { ComputedRef } from 'vue-demi'
import { computed } from 'vue-demi'

/**
 * Reactively Math.abs(value).
 *
 * @see https://vueuse.org/useAbs
 */
export function useAbs(value: MaybeComputedRef<number>): ComputedRef<number> {
  return computed(() => Math.abs(resolveUnref(value)))
}
