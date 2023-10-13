public class romanToInteger {

    static int value(char r) {
        if (r == 'I')
            return 1;
        if (r == 'V')
            return 5;
        if (r == 'X')
            return 10;
        if (r == 'L')
            return 50;
        if (r == 'C')
            return 100;
        if (r == 'D')
            return 500;
        if (r == 'M')
            return 1000;
        return -1;
    }

    static int roman2Int(String r) {
        int total = 0;
        for (int i = 0; i < r.length() - 1; i++) {
            int currVal = value(r.charAt(i));
            int nextVal = value(r.charAt(i + 1));
            if (currVal < nextVal) {
                total -= currVal;
            } else {
                total += currVal;
            }
        }
        return total + value(r.charAt(r.length() - 1));
    }

    public static void main(String[] args) {
        String str = "MCMXC";
        int result = roman2Int(str);
        System.out.println("Result " + result);
    }
}
