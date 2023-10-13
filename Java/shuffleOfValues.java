import java.util.Arrays;
import java.util.Random;

public class shuffleOfValues {
    static void shuffleVal(int arr[], int n) {
        Random rand = new Random();
        for (int i = arr.length - 1; i > 0; i--) {
            int j = rand.nextInt(arr.length);
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        System.out.println(Arrays.toString(arr));
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6 };

        int n = arr.length;
        shuffleVal(arr, n);
    }
}
