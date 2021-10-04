using System;
using System.IO;

namespace rockstar_webapi
{
    public class Music
    {
        public string RaatanLambiyan { get; set; }

        public string Sugar { get; set; }

        public string Despacito { get; set; }

        public Music()
        {
            if(File.Exists("RaatanLambiyan.txt"))
            {
                RaatanLambiyan = File.ReadAllText("RaatanLambiyan.txt");
            }
            else
            {
                RaatanLambiyan = "??";
            }
            if (File.Exists("Sugar.txt"))
            {
                Sugar = File.ReadAllText("Sugar.txt");
            }
            else
            {
                Sugar = "??";
            }
             if (File.Exists("Despacito.txt"))
            {
                Despacito = File.ReadAllText("Despacito.txt");
            }
            else
            {
                Despacito = "??";
            }
        }
    }
}