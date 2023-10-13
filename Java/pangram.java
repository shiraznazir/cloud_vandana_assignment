
public class pangram {
    static boolean checkPangram(String str) {
        String alphabets = "abcdefghijklmnopqrstuvwxyz";

        for (int i = 0; i < alphabets.length(); i++) {
            boolean check = false;
            char letter = alphabets.charAt(i);
            for (int j = 0; j < str.length(); j++) {
                if (letter == str.charAt(j)) {
                    check = true;
                }
            }
            if (!check) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String str = "Waltz, bad nymph, for quick jigs vex";
        boolean result = checkPangram(str.toLowerCase());
        System.out.println("Result:- " + result);
    }
}
