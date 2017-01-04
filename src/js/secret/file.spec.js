import makePalindrome from './file';


describe('palindrome', () => {
    it('palindroms', () => {
        expect(makePalindrome('sos')).toBe('sos');
    });
});