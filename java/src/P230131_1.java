import java.util.HashMap;

public class P230131_1 {
    private static final String today = "2020.01.01";
    private static final String[] terms = new String[]{"Z 3", "D 5"};
    private static final String[] privacies = new String[]{"2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"};
    private static class Solution {
        public int[] solution(String today, String[] terms, String[] privacies) {
            int[] answer;

            HashMap<String, Integer> mTerms = getMap(terms);
            String[][] mPrivacies = getMatrix(privacies);
            int[] dPrivacies = getDelPrivacies(mTerms, mPrivacies);

            int gToday = getDay(today);

            String str = "";
            int index = 1;
            for(int dPrivacy: dPrivacies){
                if( dPrivacy <= gToday) {
                    str = str + index + ",";
                }
                index++;
            }

            String[] strs = str.split(",");
            answer = new int[strs.length];
            for (int i = 0; i < answer.length; i++) {
                answer[i] = Integer.parseInt(strs[i]);
            }

            for (int e : answer) {
                System.out.print(e+" ");
            }

            return answer;
        }

        private HashMap<String, Integer> getMap(String[] terms) {
            HashMap<String, Integer> map = new HashMap<>();
            for(String term : terms) {
                String[] sTerm = term.split(" ");
                map.put(sTerm[0], Integer.parseInt(sTerm[1])*28);
            }
            return map;
        }

        private int[] getDelPrivacies(HashMap<String, Integer> mTerms, String[][] mPrivacies) {
            int[] gdp = new int[mPrivacies.length];
            for (int i = 0; i < gdp.length; i++) {
                gdp[i] = getDay(mPrivacies[i][0])+mTerms.get(mPrivacies[i][1]);
            }
            return gdp;
        }

        private int getDay(String yyyymmdd) {
            String[] ymd = yyyymmdd.split("\\.");
            int year = Integer.parseInt(ymd[0]);
            int month = Integer.parseInt(ymd[1]);
            int day = Integer.parseInt(ymd[2]);
            return year*12*28 + month*28 + day;
        }

        private String[][] getMatrix(String[] terms) {
            String[][] gMatrix = new String[terms.length][2];
            for (int i = 0; i < terms.length; i++) {
                String[] temp = terms[i].split(" ");
                gMatrix[i][0] = temp[0];
                gMatrix[i][1] = temp[1];
            }
            return gMatrix;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        sol.solution(today, terms, privacies);
    }

}
