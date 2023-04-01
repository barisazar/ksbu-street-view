#include <iostream>

using namespace std;
// TODO(Baki): Kod sadece 2. bölge için çalışır durumda. Geriye kalan 3 bölge için de çalışabilir olmalı.
// Switch/Case ile 4 bölge için de tam fonksiyonel çalışmasını sağla.
int main()
{
    int width, height, x, y;
    cout << "Width: ";
    cin >> width;
    cout << "Height: ";
    cin >> height;
    cout << "X: ";
    cin >> x;
    cout << "Y: ";
    cin >> y;

    double bir_derecenin_piksel_karsiligi = (double)width / (180 * 2);
    double bir_pikselin_derece_karsiligi = (double)(10 / (bir_derecenin_piksel_karsiligi * 10));
    double yaw = bir_pikselin_derece_karsiligi * x;

    double derece = (double)(180 - (y - (height / 2)) * (360 / (double)width));

    bir_derecenin_piksel_karsiligi = (double)height / (derece * 2);
    bir_pikselin_derece_karsiligi = (double)(10 / (bir_derecenin_piksel_karsiligi * 10));
    double pitch = bir_pikselin_derece_karsiligi * y;

    cout << yaw << endl;
    cout << pitch << endl;

    return 0;
}
