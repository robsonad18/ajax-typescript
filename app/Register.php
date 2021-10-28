<?php 

new class 
{
   public function __construct()
   {
      try 
      {
         if ($_POST != null || !isset($_POST))
         {
            echo json_encode([
               'status'    => 402,
               'message'   => "Dados não encontrados"
            ]);
            return false;
         }

         if ($_POST['password'] != $_POST['password-confirm'])
         {
            echo json_encode([
               'status'    => 403,
               'message'   => "As senhas não são iguais"
            ]);
            return false;
         }
         $file  = __DIR__ . '/../files' . $_POST['email'] . '.json';

         $result = file_put_contents($file, $this->getContentFile($_POST['email'], $_POST['password']));
         if (is_bool($result) === true) {
            echo json_encode([
               'status'   => 500,
               'response'  => 'Erro ao criar o arquivo'
            ]);
            return false;
         }
         echo json_encode([
            'status'   => 201,
            'response'  => 'Usuario criado com sucesso'
         ]);
         return true;
      }catch(\PDOException $e)
      {
         echo json_encode([
            'status'    => 500,
            'message'   => $e->getMessage()
         ]);
         return false;
      }



      

   }

   /**
    * Cria string de conteudo do arquivo
    * @param string $email 
    * @param string $password 
    * @return string 
    */
   private function getContentFile(string $email, string $password):string
   {
      return '
            {
               "email": ' . $email . ',
               "password:"' . base64_encode($password) . '
            }
         ';
   }
};